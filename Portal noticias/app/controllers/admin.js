module.exports.formulario_inclusao_noticia = function(res){
    res.render("admin/form_add_noticia", {validacao : {},  noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res){

    var noticiasModel = new application.app.models.noticiasDAO(application.config.dbConnection());
    var noticia = req.body;

    req.assert('titulo','Titulo é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracters').len(10, 100);
    req.assert('nomeAutor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty();
    req.assert('noticia','Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
        return; 
    }

    noticiasModel.salvarNoticia(noticia,function(erro, result){
        res.redirect("/noticias");
    });
}