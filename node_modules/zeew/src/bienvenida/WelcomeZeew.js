const { ZeewError } = require("../../utils/ZeewError");
const request = require("node-superfetch");
const { URI } = require("../../utils/key");

async function WelcomeZeew(bienvenida) {
  if (!bienvenida || typeof bienvenida !== "object")
    throw new ZeewError("Usa el constructor de la bienvenida!");
  if (!bienvenida.avatar) throw new ZeewError("Es requerido colocar un avatar");
  if (!bienvenida.token) throw new ZeewError("Debes colocar un TOKEN");
  const fondo = bienvenida.fondo;
  let avatar = bienvenida.avatar;
  const txTit = bienvenida.title;
  const colorTitulo = bienvenida.ctit;
  const colorDesc = bienvenida.cdesc;
  const txDesc = bienvenida.Desc;
  const estilo = bienvenida.estilo;
  const token = bienvenida.token;

  let style = ["classic", "anime", "simple"];
  if (!style.some((a) => estilo.includes(a)))
    throw new ZeewError("Ese estilo no existe");

  const { body } = await request
    .get(`${URI}/api/bw/${estilo}`)
    .set("token", token)
    .query({
      fondo: fondo,
      colortit: colorTitulo.replace("#", ""),
      colordesc: colorDesc.replace("#", ""),
      avatar: avatar,
      desc: txDesc,
      tit: txTit,
    });
  if (body.status == "404") throw new ZeewError(body.mensaje);

  return body;
}
module.exports = { WelcomeZeew };
