const req = require("node-superfetch");
const { ZeewError } = require("../utils/ZeewError");
const { URI } = require("../utils/key");

class Img {
  constructor(token) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.uri = URI + "/api/img";
  }

  /**
   * @param {img} img URL de una imagen
   * @returns {img} <Buffer>
   */
  async triggered(img) {
    let { body } = await req
      .get(this.uri + "/triggered")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async sepia(img) {
    let { body } = await req
      .get(this.uri + "/sepia")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async invertir(img) {
    let { body } = await req
      .get(this.uri + "/invertir")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async gris(img) {
    let { body } = await req
      .get(this.uri + "/gris")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {pixels} pixels Cantidad de desenfoque
   * @returns {img} <Buffer>
   */
  async desenfoque(img, pixel = 5) {
    let { body } = await req
      .get(this.uri + "/desenfoque")
      .set("token", this.token)
      .query({
        avatar: img,
        pixel,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @param {size} size Tamaño del pixel
   * @returns {img} <Buffer>
   */
  async pixel(img, pixel = 5) {
    let { body } = await req
      .get(this.uri + "/pixel")
      .set("token", this.token)
      .query({
        avatar: img,
        pixel,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URI de una imagen
   * @returns {img} <Buffer>
   */
  async gay(img) {
    let { body } = await req
      .get(this.uri + "/gay")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {img} img URL | URL de una imagen
   * @returns {img} <Buffer>
   */
  async circulo(img) {
    let { body } = await req
      .get(this.uri + "/circulo")
      .set("token", this.token)
      .query({
        avatar: img,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  async shipeo(img1, img2, ship) {
    let { body } = await req
      .get(this.uri + "/shipeo")
      .set("token", this.token)
      .query({
        avatar: img1,
        avatar2: img2,
        ship: ship,
      });
    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
}

module.exports = Img;
