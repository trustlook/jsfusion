var jsfusion = {
    encode: function(s) {
        r = '';
        for (i in s) {
            x =  s.charCodeAt(i).toString(2);
            for (j = 0; j < 8 - x.length ; j++ ){ r += "+[+[]]"; }
            for (j in x)
            {
                x[j] == 1 ? r += "+++[[]][+[]]" : r += "+[+[]]"
            }
        }
        return r.slice(1)
    },
    decode: function(x) {
        r = s = '';
        try {
            s = eval(x.replace(/\+{3,3}/g, '+ ++'));
            if (s.length % 8 != 0) return;
            for (i= 0; i < s.length; i+=8 ) {
                r += String.fromCharCode(parseInt(s.slice(i, i+8),2))
            }
        } catch(e) {}
        return r
    }
}
