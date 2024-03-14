const root = document.getElementById("root");
console.log(root);

const element = {
	type: "a",
	props: {
		href: "https://www.google.com",
		target: "_blank",
	},
	children: "Visit google",
};

function render(element, parent) {
	createdElement = document.createElement(element.type);
	/*createdElement.setAttribute("href", element.props.href);
	createdElement.setAttribute("target", element.props.target);*/

    for(let i in element.props){
        createdElement.setAttribute(i,element.props[i])
    }
    createdElement.innerHTML=element.children
	console.log(createdElement);
    parent.appendChild(createdElement)
}

render(element, root);
