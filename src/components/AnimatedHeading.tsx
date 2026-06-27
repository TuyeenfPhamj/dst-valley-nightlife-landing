interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  let charIndex = 0;

  return (
    <h1 className={`text-left text-balance ${className}`} aria-label={text.replace(/\n/g, " ")}>
      {text.split("\n").map((line) => (
        <span className="block" key={line}>
          {Array.from(line).map((char, index) => {
            const delay = 200 + charIndex * 30;
            charIndex += 1;
            return (
              <span
                aria-hidden="true"
                className="inline-block opacity-0"
                key={`${line}-${char}-${index}`}
                style={{
                  animation: `heroChar 500ms ease-out ${delay}ms forwards`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
