// app/controller/home.js
const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render("home", { title: "ssr" });
  }
}

module.exports = HomeController;
