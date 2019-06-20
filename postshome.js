

$( document ).ready(function(){

    var sHtml = '';
    var db = JSON.parse(localStorage.getItem('db'));
    if (!db) {
        db = db_JoaoFuzessy_ArthurBraga;
        localStorage.setItem("db", JSON.stringify(db));
        ListarPostsHome();
    }
    else{
        ListarPostsHome();
    }
    
    
function ListarPostsHome(){
            
                var Lista = db.Posts;
                
                for (i = 0; i < Lista.length; i++) {
                    var textoCompleto = Lista[i].Texto;
                    var resumo = textoCompleto.substring(0, 150) + "...";
                    sHtml += "<div class='card post-thumb col-md-4'>"+
                                    "<img class='card-img-top' src='"+Lista[i].Imagem+"' alt='Imagem de capa do post'>"+
                                    "<div class='card-body'>"+
                                    "<h5 class='card-title'>"+Lista[i].Titulo+"</h5>"+
                                        "<h6 class='post-meta'>"+
                                        "<span><i class='fas fa-heart'></i> "+Lista[i].Curtidas+"</span>"+
                                        "<span><i class='fas fa-comment'></i> "+Lista[i].Comentarios.Quantidade+"</span>"+
                                        "</h6>"+
                                    "<p class='card-text'>"+resumo+"</p>"+
                                    "<a href='./post.html' meta-id='"+Lista[i].id+"' class='btn btn-primary btnLeiaMais'>Ler mais</a>"+
                                    "</div>"+
                            "</div>"
                }
                document.getElementById('listaPosts').innerHTML = sHtml;
            }
    
    
        
            $('.btnLeiaMais').click(function(e){
                
                var metaID = $(this).attr('meta-id');
                localStorage.setItem('postAtual', metaID);
    
                }
                
            );
    
    
    
    
        });
    
    
    