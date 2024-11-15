const { failMsg } = require("../helper/helperResponse");
const { queryDb } = require("../helper/adminHelper");

exports.Registration = async (req, res) => {
    const { username, email, password,  confirm_password } = req.body;
    if (!username || !email || !password || !confirm_password) {
        return res.status(400).json({ msg: 'All field is required' });
    }
    try {
        const checkQuery = 'SELECT * FROM Registration WHERE email = ? ';
        const duplicateUser = await queryDb(checkQuery, [email]);
        if (duplicateUser.length > 0) {
            return res.status(400).json({ msg: 'Email already registered.' });
        }

        const insertQuery = 'INSERT INTO Registration (username, email, password ,confirm_password ) VALUES (?, ?, ?, ?)';
        const result = await queryDb(insertQuery, [username, email, password, confirm_password]);
        const userId = result.insertId;

        return res.status(201).json({ msg: "Registered successfully", userId: userId, data: result });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ msg: "Something went wrong in the API call." });
    }
};


// exports.Registration = async (req, res) => {
//     const { username, email, mobile_no, confirm_password, set_password, Referral } = req.body;
//     try {
//         const checkQuery = 'SELECT * FROM Registration WHERE email = ? OR mobile_no = ?';
//         const duplicateUser = await queryDb(checkQuery, [email, mobile_no]);
//         if (duplicateUser.length > 0) {
//             return res.status(400).json({ msg: 'Email or mobile number already registered.' });
//         }
//         const insertQuery = 'INSERT INTO Registration (username, email, mobile_no, set_password ,confirm_password ,Referral) VALUES (?, ?, ?, ? ,? ,?)';
//         const result = await queryDb(insertQuery, [username, email, mobile_no, set_password, confirm_password, Referral]);
//         const userId = result.insertId;
//         //bonus income query
//         const bonusInsertQuery = 'INSERT INTO bonus (user_id, amount, Description) VALUES (?, ?, ?)';
//         await queryDb(bonusInsertQuery, [userId, 10, `Registration bonus for user ID ${userId}`]);
//         return res.status(201).json({ msg: "Registered successfully", userId: userId, data: result });
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ msg: "Something went wrong in the API call." });
//     }
// };

exports.Bonus = async (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        return res.status(400).json({ msg: 'userId is mandatory' });
    }
    try {
        const userBonusesQuery = 'SELECT * FROM bonus WHERE user_id = ?';
        const userBonuses = await queryDb(userBonusesQuery, [userId]);
        if (!userBonuses.length) {
            return res.status(404).json({ msg: 'No bonuses found for this user.' });
        }
        res.json(userBonuses);
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            msg: "Something went wrong while fetching bonuses.",
        });
    }
};

exports.Deposit = async (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        return res.status(404).json({ msg: 'userId is mandatory' });
    }
    try {
        const depositbonus = "SELECT * FROM deposit WHERE user_id = ?";
        const userdepoist = await queryDb(depositbonus, [userId]);
        if (!userdepoist.length) {
            return res.status(404).json({ msg: 'userId' })
        }
        res.json(userdepoist);
    }
    catch (e) {
        console(error);
        return res.status(500).json({
            msg: "Something went wrong while fetching bonuses.",
        });
    }
}

exports.Login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'email and password are required' });
    }
    try {
        const query = 'SELECT * FROM Registration WHERE email = ?';
        const users = await queryDb(query, [email]);
        if (users.length === 0) {
            return res.status(401).json({ msg: 'User not registered' });
        }
        const user = users[0];
        if (password !== user.set_password) {
            return res.status(401).json({ msg: 'Invalid email or password' });
        }
        return res.status(200).json({
            msg: 'Login SuccessFully .',
            user: {
                userId: user.userId,
                username: user.username,
                email: user.email,
                mobile_no: user.mobile_no,
            },
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ msg: 'Something went wrong in the API call' });
    }
};


exports.Predection = async (req, res) => {

    const { amount, bet_number, gameid, period_id, user_id } = req.body
    if (!amount || !bet_number || !gameid || !period_id || !user_id) {
        return toast(" Everything is required")
    }
    try {
        const query = " SELECT * FROM BET WHERE bet_number = ?"
        const betdata = await queryDb(query[data])
    }
    catch {
        console.log(e)
        return response
    }
}


exports.signupUser = async (req, res) => {
    const {
        mobile,
        email,
        name,
        pass,
        confirmpass,
        refid,
        u_finger_id,
        through,
    } = req.body;
    if (
        !mobile ||
        !email ||
        !name ||
        !pass ||
        !confirmpass ||
        !refid ||
        !u_finger_id ||
        !through
    )
        return res.status(201).json({
            msg: `Everything is required`,
        });
    if (pass !== confirmpass)
        return res.status(201).json({
            msg: `Password and confirm password doesn't match.`,
        });
    try {
        let str = randomStrNumeric(5);
        let randomId = "ZP" + str;
        const replacement = [
            String(randomId),
            mobile,
            email,
            name,
            pass,
            Number(refid),
            Number(through) === 1 ? "Approve" : u_finger_id,
        ];
        const callsignupSp = "CALL registration_user(?,?,?,?,?,?,?,@result_msg);";
        await queryDb(callsignupSp, replacement);
        await queryDb("SELECT @result_msg;", [])
            .then(async (newresult) => {
                // await mailSender(
                //   email,
                //   `Congcongratulations,${name}`,
                //   registrationSuccessfully(name, mobile, pass)
                // );
                return res.status(200).json({
                    msg: newresult?.[0]?.["@result_msg"],
                });
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).json({
                    msg: `Something went wrong api calling`,
                });
            });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: `Something went wrong api calling`,
        });
    }
};








