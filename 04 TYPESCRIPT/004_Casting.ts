(() => {

    let indeterminado : number = 1234
    let longitud: string = (<string><unknown>indeterminado);
    
    longitud = (indeterminado as unknown as string);



})()