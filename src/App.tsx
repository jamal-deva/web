import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface TestimonialBadge {
  word: string;
  rating: number;
  attribution: string;
  position: { top: string; left: string };
  delay: number;
}

const testimonialBadges: TestimonialBadge[] = [
  { word: "VISIONARY", rating: 5, attribution: "— Forbes", position: { top: "10%", left: "25%" }, delay: 1.2 },
  { word: "MASTERFUL", rating: 5, attribution: "— Design Week", position: { top: "15%", left: "70%" }, delay: 1.8 },
  { word: "BRILLIANT", rating: 5, attribution: "— Creative Review", position: { top: "25%", left: "20%" }, delay: 2.4 },
  { word: "INNOVATIVE", rating: 5, attribution: "— Fast Company", position: { top: "30%", left: "87%" }, delay: 3.0 },
  { word: "ICONIC", rating: 5, attribution: "— Dezeen", position: { top: "50%", left: "20%" }, delay: 2.1 },
  { word: "PROFOUND", rating: 5, attribution: "— AIGA", position: { top: "47%", left: "84%" }, delay: 3.3 },
  { word: "STUNNING", rating: 5, attribution: "— Vogue", position: { top: "12%", left: "10%" }, delay: 2.7 },
  { word: "REVOLUTIONARY", rating: 5, attribution: "— Wired", position: { top: "40%", left: "2%" }, delay: 2.0 },
  { word: "CAPTIVATING", rating: 5, attribution: "— Elle", position: { top: "55%", left: "68%" }, delay: 3.9 },
    { word: "CREATIVE", rating: 5, attribution: "— Inkwellmedia", position: { top: "35%", left: "73%" }, delay: 3.9 }
];

function TestimonialBadge({ badge }: { badge: TestimonialBadge }) {
  return (
    <div 
      className="absolute opacity-0 animate-fade-in-delayed group cursor-default"
      style={{ 
        top: badge.position.top, 
        left: badge.position.left,
        animationDelay: `${badge.delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="text-left">
        {/* Stars */}
        <div className="flex mb-1">
          {[...Array(badge.rating)].map((_, i) => (
            <Star 
              key={i} 
              size={10} 
              className="fill-white/20 text-white/70 mr-0.5" 
            /> 
          ))}
        </div>

       <div className="relative inline-block text-[1.6rem] sm:text-2xl font-bosenAlt uppercase tracking-wide leading-none">
          {/* Actual Word with Shine Animation */}
          <span className="relative z-10 text-white/10 animate-shine">{badge.word}</span>
        </div>

        {/* Attribution */}
        <div className="mt-1 text-sm text-white/20 font-light tracking-wide">
          {badge.attribution}
        </div>
      </div>
    </div>
  );
}

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);
  const newSectionRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Background text (Aamir Naqvi) moves up with scroll as new section comes up
      if (backgroundTextRef.current) {
        backgroundTextRef.current.style.transform = `translateY(-${scrollY * 0.8}px)`;
      }
      
      // Portrait moves down slowly (opposite direction to new section)
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      
      // Main text (I EDIT VISUALS...) moves up with scroll
      if (mainTextRef.current) {
        mainTextRef.current.style.transform = `translateY(-${scrollY * 0.5}px)`;
      }
      
      // Triangle moves down with scroll
      if (triangleRef.current) {
        triangleRef.current.style.transform = `translate(-50%, ${scrollY * 0.4}px)`;
      }
      
      // New section comes up from bottom
      if (newSectionRef.current) {
        const translateY = Math.max(0, 100 - (scrollY * 0.1));
        newSectionRef.current.style.transform = `translateY(${translateY}vh)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative">
      {/* Main Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden bg-transparent"
      >
        {/* External Background Image */} 
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: `url('/public/bg.png')`,
            backgroundAttachment: 'fixed'
          }}
        />
       
        {/* Portrait */}
        <div 
          ref={portraitRef}
          className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-100 ease-out" 
          style={{ top: '-10%' }}
        >
          <div className="relative"> 
            <div 
              className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] overflow-hidden opacity-0 animate-fade-in-delayed"
              style={{ 
                width: '800px',
                height: '800px', 
                animationDelay: '0.3s', 
                animationFillMode: 'forwards' 
              }}
            > 
              <img 
                src="/public/me.png"
                alt="Portrait"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent" />
            </div> 
          </div>
        </div> 

        {/* Background Text - Aamir Naqvi at Bottom */}
        <div 
          ref={backgroundTextRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-100 ease-out"
          style={{ zIndex: 1, top: '65%' }}
        >
          <div 
            className="text-[4rem] md:text-[10rem] lg:text-[15rem] font-bosenAlt text-black/30 select-none leading-none opacity-0 animate-fade-in-delayed"
            style={{
              animationDelay: '0.1s',  
              animationFillMode: 'forwards' 
            }}
          >
            AAMIR NAQVI
          </div>
        </div>
        
        {/* Main Typography */}
        <div 
          ref={mainTextRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-100 ease-out"
          style={{ top: '60%' }}
        >
          <div className="text-center z-10 px-6">
            <div 
              className="text-2xl md:text-4xl lg:text-5xl font-bosenAlt tracking-tight text-white/80 leading-tight opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards'  }}
            >
              I EDIT
            </div>
            <div 
              className="text-2xl md:text-3xl lg:text-4xl font-bosenAlt tracking-tight text-white/80 leading-tight mt-2 opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
            >
              VISUALS THAT
            </div>
            <div 
              className="text-2xl md:text-4xl lg:text-5xl font-bosenAlt tracking-tight text-white leading-tight mt-2 opacity-0 animate-fade-in-delayed"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
            >
              BUILD BRANDS
            </div>
          </div>
        </div>

        {/* Floating Testimonial Badges */}
        {testimonialBadges.map((badge, index) => (
          <TestimonialBadge key={index} badge={badge} />
        ))}

        {/* Bottom Triangle Shape */}
        <div 
          ref={triangleRef}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delayed z-30"
          style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col items-center">
            <div 
              className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-cyan-400 animate-bounce-triangle"
            />
          </div>
        </div>
      </div>

      {/* New Section that enters from bottom */}
      <div 
        ref={newSectionRef}
        className="relative z-20 bg-white min-h-screen"
        style={{ transform: 'translateY(100vh)' }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bosenAlt text-gray-900 mb-8 opacity-0 animate-fade-in-delayed">
              PORTFOLIO
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 opacity-0 animate-fade-in-delayed" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Crafting visual narratives that resonate with audiences and elevate brand experiences through innovative design and storytelling.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div 
                  key={item}
                  className="bg-gray-100 aspect-square rounded-lg opacity-0 animate-fade-in-delayed hover:scale-105 transition-transform duration-300"
                  style={{ 
                    animationDelay: `${0.6 + index * 0.1}s`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bosenAlt text-2xl">
                    PROJECT {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;