module.exports.noticias = function(application, req, res){
    var noticiasModel = new application.app.models.noticiasDAO(application.config.dbConnection());
        
    noticiasModel.getNoticias(function(erro, result){
        res.render("noticias/noticias", {noticias : result}); 
    });
}
module.exports.noticia = function(application, req, res){
    var noticiaModel = new application.app.models.noticiasDAO(application.config.dbConnection());
    noticiaModel.getNoticia(function(erro, result){
        res.render("noticias/noticia", {noticia : result});
    });
}