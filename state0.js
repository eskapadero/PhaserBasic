var basic = {};

basic.state0 = function(){};
basic.state0.prototype = {
    preload: function(){
        game.load.image('background','assets/backgrounds/treeBG.png');    
    },    
    create: function(){
        var background = game.add.sprite(0,0,'background');
        
    },   
    update:function(){}
    
};  