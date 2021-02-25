class Bienvenida {
    
    constructor(datos = {}) {
      let keys = Object.keys(datos)
    if(keys.length > 0) {
        for(var i in keys) this[keys[i]] = datos[keys[i]]
    }
    }
    token(token){
        this.token = token
        return this;
    }
    titulo(title){
        this.title = title;
    return this;
    }
  
    colorTit(ctit){
        this.ctit = ctit
        return this
    }
  
    colorDesc(cdesc){
        this.cdesc = cdesc
    
    return this;
    }
  
    descripcion(Desc){
        this.Desc = Desc
    
    return this;
    }
  /** 
   * @param { URL } avatar <Required> El avatar del usuario o un url. 
   * @private
   */
    avatar(avatar){
        this.avatar = avatar;
        return this;
    }
  
    fondo(fondo){
        this.fondo = fondo;
        return this;
    }
  
     estilo(estilo){
        this.estilo = estilo;
        return this;
    }
}
module.exports = {Bienvenida};
