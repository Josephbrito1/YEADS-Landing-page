import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  // Si se proporciona onClick, ejecutar la función; si no, redirigir a href
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Evitar la redirección inmediata
      onClick();
    } else if (href) {
      window.location.href = href; // Redirigir si no hay onClick
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
};

export default Button;

