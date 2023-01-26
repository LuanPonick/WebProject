var totalDeBlocos = 3;
            function Trade(state)
            {
                document.getElementById("lista-exemplo-3").style.flexWrap = state;
                
            }
            function Adicionar(numero)
            {
                if(numero > 0)
                {
                    if(totalDeBlocos < 12)
                    {
                        totalDeBlocos += numero 
                        var itensLista = document.createElement("li")
                        itensLista.className = "itens-exemplo-3"
                        var corpoLista = document.getElementById('lista-exemplo-3')

                        corpoLista.insertBefore(itensLista,corpoLista[0])
                    }
                    else
                    {
                        window.alert('Não ha necessidade de adicionar mais blocos ao conteiner.')
                    }
                }
                if(numero < 0)
                {
                    if(totalDeBlocos > 1)
                    {
                        totalDeBlocos += numero 
                        var corpoLista = document.getElementById('lista-exemplo-3')
                        var ultimoItem = document.getElementsByClassName('itens-exemplo-3')[totalDeBlocos]
                        ultimoItem.remove();
                        
                    }
                    else
                    {
                        window.alert('Não ha necessidade de remover mais blocos ao conteiner.')
                    }
                }
                
            }