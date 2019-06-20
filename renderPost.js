

$( document ).ready(function(){


var sHtml = '';
var db = JSON.parse(localStorage.getItem('db'));
var Lista = db.Posts;
var indexAtual = localStorage.getItem('postAtual');
var postAtual = Lista[indexAtual];
var listaComentarios = postAtual.Comentarios.Listagem;
var numComentarios = listaComentarios.length;

if (!db) {
    sHtml = '<div class="container semConteudo"><h4>Não há conteúdo para exibir</h4></div>';
    $('#PostContainer').html(sHtml);
}
else{
    RenderPost();
    ListarComentarios();
}


function RenderPost(){

    

    sHtml+=`
    <div class="row">
        <div class="hero" style="background:url(${postAtual.Imagem})">
        
        </div>                    
    </div>

    <div class="container">
            <div class="row post-title">
                    <h2>${postAtual.Titulo}</h2>         
            </div>
            <div class="row"> 
                    <div class="col-md-8">
                    <h5 class="post-meta">
                            <span><i class="fas fa-heart"></i> <span id="numCurtidas">${postAtual.Curtidas}</span> Curtidas</span>
                            <span><i class="fas fa-comment"></i> <span id="numComentarios">${postAtual.Comentarios.Quantidade}</span> Comentários</span>
                    </h5>  
                    </div>       
            </div>
            <div class="row post-text">
                    <div class="col-md-8">
                    ${postAtual.Texto}
                    </div>
            </div>
            <div class="row post-footer">
                    <div class="col-md-8">
                        <button id="btnCurtir" type="button" class="btn btn-info">Curtir</button>
                    </div>
            </div>
            
    </div>
`;

$('#PostContainer').html(sHtml);
};






//CURTIR

var numCurtidas = postAtual.Curtidas;

function CurtirPost(){
        numCurtidas = ++numCurtidas;
        $('#numCurtidas').text(numCurtidas);
        db.Posts[indexAtual].Curtidas = numCurtidas;
        localStorage.setItem('db', JSON.stringify(db));
        alert('Obrigado!');
}

$('#btnCurtir').on("click", function(){
        
        CurtirPost();
        
    });






//COMENTAR

$('#numComentarios').text(numComentarios);

function PostarComentario(){
        var comentario = {
                "Nome" : $('#colFormNome').val(),
                "Texto" : $('#colFormTexto').val()
            };

        listaComentarios.push(comentario);
        localStorage.setItem('db', JSON.stringify(db));
        alert("Comentário postado.");
        ListarComentarios();
       
    }

function ListarComentarios(){   
        
        var contentComentarios = '';     
        for (i = 0; i < numComentarios; i++){
            contentComentarios+= `
                <div class='row comment'>
                    <div class='col-md-1 col-2 avatar'><i class='fas fa-user-astronaut'></i></div>
                    <div class='col-md-6 col-10'>
                            <h5>${listaComentarios[i].Nome}</h5>
                            <p>${listaComentarios[i].Texto}</p>     
                    </div>
                </div>`;
            
        }
        $("#ListaComentarios").html(contentComentarios);
        
    }

    $('#formComentarios').on("submit", function(){
            PostarComentario();
            
        });
        
     
       

});
