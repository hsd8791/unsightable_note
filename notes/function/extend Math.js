Math.TO_RAD = Math.PI/180;

Math.getDistance = function( x1, y1, x2, y2 ) {
    
    var     xs = 0,
        ys = 0;
     
    xs = x1 - x2;
    ys = y1 - y2;       
    xs = xs * xs;
    ys = ys * ys;
     
    return Math.sqrt( xs + ys );
};

Math.getDegree = function( x1, y1, x2, y2 ) { //how?
        
    var dx = x2 - x1,
        dy = y2 - y1;
    
    return Math.atan2(dy,dx) / Math.TO_RAD;
};