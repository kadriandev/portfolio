interface BubblesProps {
    numOfBubbles: number;
}

export const Bubbles = ({ numOfBubbles }: BubblesProps) => {
    const sizes = ['10', '10', '15', '15', '20'];
    const colour = ['bg-violet-600/50', 'bg-sky-600/50', 'bg-teal-500/50'];

    const bubbles = new Array(numOfBubbles).fill(1)
        .map((_, i) => ({
            delay: Math.round(Math.random() * 100) % 20 / 2,
            size: Math.round(Math.random() * 10) % sizes.length,
            duration: Math.round(Math.random() * 10) % sizes.length,
            colour: colour[i % colour.length]
        }));

    return (bubbles.map((b, i) =>
        <div
            className={`absolute -bottom-[40%] animate-bubble-rise rounded-[50%] ${b.colour}`}
            style={{
                left: `${i * 5}%`,
                width: sizes[b.size] + 'rem',
                height: sizes[b.size] + 'rem',
                animationDelay: b.delay + 's',
                animationDuration: (10 + (b.size * 2)) + 's'
            }}
        />
    ));
}
