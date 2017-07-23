/**
 * Created by Administrator on 2017/7/22.
 */
$(document).ready(
    function(){
        var testData = {data:['child-1',{text:'child-2',children:['child-2-1','child-2-2']},'child-3']};
        $('.justTree').justTree(testData);
    }
);