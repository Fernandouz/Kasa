export default function Banner({photo, children}){
    return (
        <div className="img-container">
                <img src={photo} alt="paysage"  />
                <p className="descr">{children}</p>
            </div>
    )
}