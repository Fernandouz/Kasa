export default function Banner({photo,title = "img-container", children}){
    return (
        <div className={title}>
                <img src={photo} alt="paysage"  />
                <p className="descr">{children}</p>
            </div>
    )
}