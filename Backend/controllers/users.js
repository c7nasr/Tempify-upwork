const Mailjs = require("@cemalgnlts/mailjs");
const { default: axios } = require("axios");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

exports.CreateUser = async (req, res) => {
  const MailService = new Mailjs();

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const randomName = uniqueNamesGenerator({
        dictionaries: [adjectives, colors],
      }); 
      const domain = await (
        await axios.get("https://api.mail.tm/domains?page=1")
      ).data["hydra:member"][0].domain;

      const user = await MailService.register(randomName + "@" + domain, randomName);


      return res.json(user);
    } else {
      const user = await MailService.register(email, password);
      console.log("Userika");
      return res.json(user);
    }
  } catch (e) {
    console.log("ServerDown, " + e);
    return res.json({ status: "failed", error: e.toString() });
  }
};

exports.LoginUser = async (req, res) => {
  const MailService = new Mailjs();

  try {
    const { mail, pass } = req.body;
    const user = await MailService.login(mail, pass);

    return res.json(user);
  } catch (e) {
    console.log("ServerDown, " + e);
    return res.json({ status: "failed", error: e.toString() });
  }
};

exports.GetUser = async (req, res) => {
  const MailService = new Mailjs();

  try {
    const { id, token } = req.query;
    MailService.token = token;
    const user = await MailService.getAccount(id);

    return res.json(user);
  } catch (e) {
    console.log("ServerDown, " + e);
    return res.json({ status: "failed", error: e.toString() });
  }
};

exports.DeleteUser = async (req, res) => {
  const MailService = new Mailjs();

  try {
    MailService.token = req.query.token;
    const { id } = req.body;
    const user = await MailService.deleteAccount(id);

    return res.json(user);
  } catch (e) {
    console.log("ServerDown, " + e);
    return res.json({ status: "failed", error: e.toString() });
  }
};
