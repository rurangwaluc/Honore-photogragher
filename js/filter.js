
const menu = [
    {
          category : 'mobile',
          img : `./img/works/thumb/1.jpg`,
    }
    ,{
          category : 'mobile',
          img : './img/works/thumb/2.jpg',
    }
    ,{
          category : 'mobile',
          img : './img/works/thumb/3.jpg',
    }
    ,{
          category : 'mobile',
          img : './img/works/thumb/4.jpg',
    }
    ,{
          category : 'mobile',
          img : './img/works/thumb/5.jpg',
    }
    ,{
          category : 'shoe',
          img : './img/works/thumb/6.jpg',
    }
    ,{
          category : 'shoe',
          img : './img/works/thumb/1.jpg',
    }
    ,{
          category : 'shoe',
          img : './img/works/thumb/4.jpg',
    }
    ,{
          category : 'shoe',
          img : './img/works/thumb/3.jpg',
    }
    ,{
          category : 'headphone',
          img : './img/works/thumb/4.jpg',
    }
    ,{
          category : 'headphone',
          img : './img/works/thumb/2.jpg',
    }
    ,{
          category : 'headphone',
          img : './img/works/thumb/5.jpg',
    }
    ];
    const container = document.querySelector('.images');
    const filterbtn = document.querySelectorAll('.filter-btn');
    
    window.addEventListener('DOMContentLoaded',function(){
      loaddata(menu);
    })
    
    function loaddata(card){
          const displayitem = card.map(function(item){
            return `<img src="${item.img}" data-aos="flip-left" alt="">
    `;
      })    
      const displaymenu = displayitem.join(',');
      container.innerHTML = displaymenu;
    }
    
    
    filterbtn.forEach(function(btn){
          btn.addEventListener('click',function(itembtn){
                const category = itembtn.currentTarget.dataset.id;
                const filtermenu = menu.filter(function(menucategory){
                      // console.log(menucategory.category);
                      // console.log(category);
    
                      if(menucategory.category === category){
                            return menu;
                      }
                })
    
                if(category === 'all'){
                      loaddata(menu);
                }else{
                      loaddata(filtermenu);
                }
          })
    })
    
    