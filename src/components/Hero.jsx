export default function Hero() {
  return (
    <div className="hero">
      <video className="hero-img" muted preload="auto" autoPlay="autoplay">
        <source src="dark_cover.mp4" type="video/mp4" />
      </video>

      {/* <img src="stockimage.png" alt="hero visual" className="hero-img"/> */}
      <h1 className="hero-h2">
        VEHICLE SERVICE AND REPAIRS <b>DELIVERED</b>
      </h1>
      <h3 className="hero-h3">
        {" "}
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Neque porro quisquam est, qui dolorem.
      </h3>
      <button className="hero-btOne">Customer</button>

      <button className="hero-btwo">Business</button>
    </div>
  );
}
