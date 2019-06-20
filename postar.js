
//POSTAR POST

$( document ).ready(function(){


    var sHtml = '';
    var db = JSON.parse(localStorage.getItem('db'));
    var Lista = db.Posts;
    
    if (!db) {
        db = db_JoaoFuzessy_ArthurBraga;
    }
    else{
    
    }



    
function PostarPost(){
    let novoId = db.Posts[db.Posts.length - 1].id + 1;
    var post = 
    {
            "id": novoId,
            "Data": "",
            "Titulo": $('#colFormTitulo').val(),
            "Texto": $('#colFormTextoPost').val(),
            "Imagem": $('#colFormImagem').val(),
            "Curtidas": 0,
            "UrlAppend": "id="+this.id, 
            "Comentarios": 
                {
                    "Quantidade" : 0,
                    "Listagem": []
            }
        };
    

        Lista.push(post);
        localStorage.setItem("db", JSON.stringify(db));
        alert("Conteúdo postado!");
        return true;
        }

    $('#formPost').on("submit", function(){
        PostarPost();
        
    });

});