const fullname = {
    myname : 'nasim daghash',
    printname:function(){
        console.log(this.myname);
    },
    namedelay : function(){
        setTimeout(
            function(){
                console.log(this.myname);
            }.bind(this),1000);
    }
};

fullname.printname();
fullname.namedelay();
