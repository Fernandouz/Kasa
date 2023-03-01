import React from "react"

export default function Collapse({title, children}){
    const [isOpen, setIsOpen] = React.useState(false);

    function change(e){
       isOpen === false ? setIsOpen(true) : setIsOpen(false);
    }

    return(
        <div className="collapse">
            <h2 className="col-title">{title}<i className="fa-solid fa-chevron-up fleche" style={isOpen ? {transform: "rotateX(0.5turn)"} : {transform:"rotate(0deg)"}} onClick={change} ></i></h2>
            {isOpen ? <div className="col-text"><div className="col-p">{children}</div></div> : ""}
        </div>
    )
}