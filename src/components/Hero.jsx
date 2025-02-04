
import Waves from "./Waves";

function Hero() {
    return (
        <>

            <div className='absolute inset-0 z-0'>
                <Waves
                    lineColor="#4F46E5"
                    backgroundColor="rgba(0, 0, 0, 0.0)"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
            </div>

            <div className="relative z-10">
                <div className="absolute -bottom-20 left-0 w-full h-32 bg-gradient-to-b from-black via-black to-transparent clip-path-curve" />
            </div>
        </>
    )
}

export default Hero