function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);


    const domElement=document.createElement(reactElement.type);
    
}


const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target: "_blank"
    },
    children : 'Click me to to visit google'
}

const mainConainer = document.querySelector('#root')

customRender (reactElement,mainConainer);

