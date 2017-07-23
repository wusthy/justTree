/**
 * Created by Administrator on 2017/7/23.
 */
$.fn.extend(
    {
        creatLabel:function(){
            $('.justTree > ul > li ul').addClass('hide');
            $('.justTree li').each(function(){
                var liText = this.childNodes[0];
                $(liText).wrap('<label></label>');
            });
        },
        hoverEvent:function(){
            $('.justTree li > label ').hover(function(event){
                event.stopPropagation();
                $(event.target).addClass('mouseHover');
            },function(event){
                event.stopPropagation();
                $(event.target).removeClass('mouseHover');
            });
        },

        clickEvent:function(){
            $('.justTree > ul').click(function(event){
                event.stopPropagation();
                event.preventDefault();
                var eventTarget = event.target;
                if( eventTarget.nodeName.toLocaleLowerCase() == 'label')
                {
                    $(eventTarget.parentNode).children()
                        .not(':first')
                        .toggleClass('hide');
                }
            });
        },

        createTree:function(Data){
            var treeFragment = document.createDocumentFragment();
            var parseData = function (Data) {
                var data = Data.data,
                    len = data.length,
                    $treeUl = $('<ul></ul>');
                for (var i = 0; i < len; i++) {
                    var item = data[i];
                    var $treeLi = $('<li></li>');
                    var $treeLabel = $('<label></label>');
                    $treeLi.append($treeLabel);
                    if (typeof(item) === 'string') {
                        $treeLabel.text(item);
                    } else {
                        $treeLabel.text(item.text);
                        if (item.children) {
                            var child = {};
                            child.data = item.children;
                            $treeLi.append(parseData(child));
                        }
                    }
                    $treeUl.append($treeLi);
                }
                return $treeUl;
            };
            $(treeFragment).append(parseData(Data));
            $(this).append(treeFragment);
        },

        justTree:function(Data)
        {
            if (Data) {
                $('.justTree').createTree(Data);
            }else{
                $('.justTree').creatLabel();
            }
           $('.justTree').hoverEvent();
           $('.justTree').clickEvent();
        }
    }
);