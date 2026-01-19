const { useState, useEffect, useRef } = React;

const ThoughtStreamPortfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [revealedProject, setRevealedProject] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientX = (mousePos.x / window.innerWidth) * 100;
  const gradientY = (mousePos.y / window.innerHeight) * 100;

  return React.createElement('div', { className: "relative w-full min-h-screen bg-black text-white overflow-x-hidden cursor-none" },
    // Custom Cursor
    React.createElement('div', {
      ref: cursorRef,
      className: "fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference",
      style: {
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s, height 0.3s'
      }
    },
      React.createElement('div', { className: "w-full h-full rounded-full border-2 border-white" })
    ),

    // Opening: Breathing Gradient Field
    React.createElement('section', { className: "relative h-screen flex items-center justify-center overflow-hidden" },
      React.createElement('div', {
        className: "absolute inset-0 transition-all duration-1000",
        style: {
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 25%,
            rgba(236, 72, 153, 0.2) 50%,
            rgba(0, 0, 0, 1) 100%)`
        }
      }),
      
      React.createElement('div', {
        className: "absolute inset-0 opacity-40",
        style: {
          background: `radial-gradient(circle at ${50 + Math.sin(Date.now() / 2000) * 20}% ${50 + Math.cos(Date.now() / 2000) * 20}%, 
            rgba(168, 85, 247, 0.4) 0%, 
            transparent 50%)`,
          animation: 'pulse 4s ease-in-out infinite'
        }
      }),

      React.createElement('div', { className: "relative z-10 text-center px-4" },
        React.createElement('h1', {
          className: "text-8xl font-bold mb-6 tracking-tight",
          style: {
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500
          }
        },
          "I BUILD",
          React.createElement('br'),
          React.createElement('span', { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400" },
            "EXPERIENCES"
          )
        ),
        React.createElement('p', {
          className: "text-xl text-gray-400 tracking-widest",
          style: {
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY / 500
          }
        },
          "NOT WEBSITES"
        )
      ),

      React.createElement('div', { className: "absolute bottom-12 left-1/2 transform -translate-x-1/2" },
        React.createElement('div', { className: "w-px h-16 bg-gradient-to-b from-white to-transparent animate-pulse" })
      )
    ),

    // Projects: Distinctive Visual Systems
    React.createElement('section', { className: "relative min-h-screen py-32 bg-gradient-to-b from-black to-purple-950" },
      React.createElement('div', { className: "container mx-auto px-8" },
        React.createElement('h2', {
          className: "text-8xl font-bold mb-20 tracking-tighter",
          style: {
            transform: `translateX(${scrollY * 0.1}px)`
          }
        },
          "SELECTED WORK"
        ),

        React.createElement('div', { className: "space-y-24" },
          // PROJECT 1: ExpireSense
          React.createElement('div', {
            className: "relative group cursor-pointer",
            onMouseEnter: () => setRevealedProject(1),
            onMouseLeave: () => setRevealedProject(null)
          },
            React.createElement('div', { className: "relative overflow-hidden" },
              React.createElement('div', {
                className: "absolute inset-0 opacity-5",
                style: {
                  backgroundImage: 'linear-gradient(0deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  transform: revealedProject === 1 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.6s ease-out'
                }
              }),

              React.createElement('div', { className: "relative p-16 border-l-4 border-purple-500/50" },
                React.createElement('div', { className: "absolute top-8 right-8 text-sm font-mono text-purple-500 tracking-widest" },
                  "APRIL 2025"
                ),

                React.createElement('h3', {
                  className: "text-7xl font-mono font-bold tracking-tight mb-4 transition-all duration-500",
                  style: {
                    letterSpacing: revealedProject === 1 ? '0.05em' : '-0.02em',
                    color: revealedProject === 1 ? 'rgb(139, 92, 246)' : 'white'
                  }
                },
                  "EXPIRE",
                  React.createElement('span', { className: "text-purple-500" }, "SENSE")
                ),

                React.createElement('p', { className: "text-sm text-gray-500 tracking-widest mb-8" }, "SMART FOOD MANAGEMENT SYSTEM | FLUTTER"),

                React.createElement('div', {
                  className: "overflow-hidden transition-all duration-500",
                  style: {
                    maxHeight: revealedProject === 1 ? '200px' : '0px',
                    opacity: revealedProject === 1 ? 1 : 0
                  }
                },
                  React.createElement('p', { className: "text-xl text-gray-300 leading-relaxed border-l-2 border-purple-500 pl-6" },
                    "Reduced household food waste by making expiration tracking automatic and impossible to ignore"
                  )
                ),

                React.createElement('div', { className: "mt-8 flex gap-1" },
                  [...Array(12)].map((_, i) =>
                    React.createElement('div', {
                      key: i,
                      className: "h-1 flex-1 bg-purple-500/20 transition-all duration-300",
                      style: {
                        backgroundColor: revealedProject === 1 && i < 8 
                          ? 'rgb(139, 92, 246)' 
                          : 'rgba(139, 92, 246, 0.2)',
                        transitionDelay: `${i * 30}ms`
                      }
                    })
                  )
                )
              )
            )
          ),

          // PROJECT 2: SportsCourtBookingSystem
          React.createElement('div', {
            className: "relative group cursor-pointer",
            onMouseEnter: () => setRevealedProject(2),
            onMouseLeave: () => setRevealedProject(null)
          },
            React.createElement('div', { className: "relative overflow-hidden bg-zinc-950" },
              React.createElement('div', {
                className: "absolute inset-0",
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
                  backgroundSize: '60px 100%',
                  transform: revealedProject === 2 ? 'translateX(0px)' : 'translateX(-10px)',
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }
              }),

              React.createElement('div', { className: "relative p-16 border-2 border-cyan-500/20" },
                React.createElement('div', { className: "absolute top-8 right-8 text-sm font-mono text-cyan-400 tracking-widest" },
                  "DECEMBER 2025"
                ),

                React.createElement('h3', {
                  className: "text-7xl font-mono font-extrabold tracking-tight mb-4 transition-all duration-500",
                  style: {
                    letterSpacing: '-0.03em',
                    color: revealedProject === 2 ? 'rgb(34, 211, 238)' : 'white',
                    fontVariantNumeric: 'tabular-nums'
                  }
                },
                  "SPORTS COURT ",
                  React.createElement('span', { className: "text-cyan-500" }, "BOOKING SYSTEM")
                ),

                React.createElement('p', { className: "text-sm text-gray-500 tracking-widest mb-8 font-mono" }, "BOOKING MANAGEMENT SYSTEM / TYPESCRIPT"),

                React.createElement('div', {
                  className: "overflow-hidden transition-all duration-500",
                  style: {
                    maxHeight: revealedProject === 2 ? '200px' : '0px',
                    opacity: revealedProject === 2 ? 1 : 0
                  }
                },
                  React.createElement('p', { className: "text-xl text-gray-300 leading-relaxed border-l-2 border-cyan-500 pl-6 font-mono text-base" },
                    "Conflict resolution engine. Overlap detection. State transitions. No double-bookings allowed."
                  )
                ),

                React.createElement('div', { className: "mt-8 flex gap-3 flex-wrap" },
                  [
                    { label: 'READY', delay: 0 },
                    { label: 'HOLD', delay: 100 },
                    { label: 'BOOK', delay: 200 },
                    { label: 'IN USE', delay: 300 },
                    { label: 'FREE', delay: 400 }
                  ].map((state, i) =>
                    React.createElement('div', {
                      key: i,
                      className: "flex-1 min-w-[60px] transition-all duration-500",
                      style: {
                        transitionDelay: `${state.delay}ms`
                      }
                    },
                      React.createElement('div', {
                        className: "border-2 transition-all duration-500 p-3 text-center font-mono text-xs tracking-wider",
                        style: {
                          borderColor: revealedProject === 2 && i === 3
                            ? 'rgb(34, 211, 238)'
                            : 'rgba(34, 211, 238, 0.2)',
                          backgroundColor: revealedProject === 2 && i === 3
                            ? 'rgba(34, 211, 238, 0.1)'
                            : 'transparent',
                          color: revealedProject === 2 && i === 3
                            ? 'rgb(34, 211, 238)'
                            : 'rgb(100, 116, 139)'
                        }
                      },
                        state.label
                      ),
                      i < 4 && React.createElement('div', {
                        className: "h-0.5 mt-2 transition-all duration-500",
                        style: {
                          backgroundColor: revealedProject === 2 && i < 3
                            ? 'rgb(34, 211, 238)'
                            : 'rgba(34, 211, 238, 0.2)',
                          transitionDelay: `${state.delay + 50}ms`
                        }
                      })
                    )
                  )
                )
              )
            )
          ),

          // PROJECT 3: School Remodeling
          React.createElement('div', {
            className: "relative group cursor-pointer",
            onMouseEnter: () => setRevealedProject(3),
            onMouseLeave: () => setRevealedProject(null)
          },
            React.createElement('div', { className: "relative overflow-hidden" },
              React.createElement('div', {
                className: "absolute inset-0",
                style: {
                  background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                  opacity: revealedProject === 3 ? 0.6 : 0.2,
                  transition: 'opacity 0.6s ease-out'
                }
              }),

              React.createElement('div', { className: "relative p-16 border-t-2 border-b-2 border-blue-500/30" },
                React.createElement('div', { className: "absolute top-8 right-8 text-sm font-mono text-blue-400 tracking-widest" },
                  "MAY 2024"
                ),

                React.createElement('h3', {
                  className: "text-7xl font-bold mb-4 transition-all duration-500",
                  style: {
                    letterSpacing: '0.1em',
                    fontWeight: revealedProject === 3 ? 900 : 700,
                    color: revealedProject === 3 ? 'rgb(59, 130, 246)' : 'white',
                    textTransform: 'uppercase'
                  }
                },
                  "SCHOOL",
                  React.createElement('br'),
                  React.createElement('span', { className: "text-blue-400" }, "REMODELING")
                ),

                React.createElement('p', { className: "text-sm text-gray-500 tracking-widest mb-8" }, "INFORMATIONAL WEBSITE | HTML CSS JAVASCRIPT PHP"),

                React.createElement('div', {
                  className: "overflow-hidden transition-all duration-500",
                  style: {
                    maxHeight: revealedProject === 3 ? '200px' : '0px',
                    opacity: revealedProject === 3 ? 1 : 0
                  }
                },
                  React.createElement('p', { className: "text-xl text-gray-300 leading-relaxed border-l-2 border-blue-500 pl-6" },
                    "Check out the live site at: https://gpis-kai.netlify.app"
                  )
                ),

                React.createElement('div', { className: "mt-8 space-y-2" },
                  [100, 75, 50, 25].map((width, i) =>
                    React.createElement('div', {
                      key: i,
                      className: "h-0.5 bg-blue-500/20 transition-all duration-500",
                      style: {
                        width: revealedProject === 3 ? `${width}%` : '0%',
                        backgroundColor: revealedProject === 3 
                          ? 'rgba(59, 130, 246, 0.4)' 
                          : 'rgba(59, 130, 246, 0.1)',
                        transitionDelay: `${i * 100}ms`
                      }
                    })
                  )
                )
              )
            )
          ),

          // PROJECT 4: Focus Guard
          React.createElement('div', {
            className: "relative group cursor-pointer",
            onMouseEnter: () => setRevealedProject(4),
            onMouseLeave: () => setRevealedProject(null)
          },
            React.createElement('div', { className: "relative overflow-hidden" },
              React.createElement('div', {
                className: "absolute inset-0 transition-all duration-700",
                style: {
                  background: 'linear-gradient(90deg, transparent 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)',
                  clipPath: revealedProject === 4 
                    ? 'inset(0% 0% 0% 0%)' 
                    : 'inset(0% 50% 0% 50%)'
                }
              }),

              React.createElement('div', { className: "relative p-16 border-r-4 border-pink-500/50" },
                React.createElement('div', { className: "absolute top-8 right-8 text-sm font-mono text-pink-400 tracking-widest" },
                  "2024"
                ),

                React.createElement('h3', {
                  className: "text-7xl font-bold tracking-tighter mb-4 transition-all duration-500",
                  style: {
                    letterSpacing: revealedProject === 4 ? '-0.05em' : '-0.02em',
                    color: revealedProject === 4 ? 'rgb(236, 72, 153)' : 'white',
                    fontWeight: 800
                  }
                },
                  "FOCUS",
                  React.createElement('span', { className: "text-pink-500" }, "GUARD")
                ),

                React.createElement('p', { className: "text-sm text-gray-500 tracking-widest mb-8" }, "BROWSER EXTENSION | HTML CSS JAVASCRIPT"),

                React.createElement('div', {
                  className: "overflow-hidden transition-all duration-500",
                  style: {
                    maxHeight: revealedProject === 4 ? '200px' : '0px',
                    opacity: revealedProject === 4 ? 1 : 0
                  }
                },
                  React.createElement('p', { className: "text-xl text-gray-300 leading-relaxed border-l-2 border-pink-500 pl-6" },
                    "A content blocker that enforces user-defined boundaries, not algorithmic recommendations"
                  )
                ),

                React.createElement('div', { className: "mt-8 grid grid-cols-8 gap-2" },
                  [...Array(8)].map((_, i) =>
                    React.createElement('div', {
                      key: i,
                      className: "h-8 border border-pink-500/20 transition-all duration-300",
                      style: {
                        borderColor: revealedProject === 4 && i % 2 === 0
                          ? 'rgb(236, 72, 153)' 
                          : 'rgba(236, 72, 153, 0.2)',
                        backgroundColor: revealedProject === 4 && i % 2 === 0
                          ? 'rgba(236, 72, 153, 0.1)' 
                          : 'transparent',
                        transitionDelay: `${i * 40}ms`
                      }
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),

    // Resume Download
    React.createElement('section', { className: "relative h-screen flex items-center justify-center bg-black" },
      React.createElement('div', { className: "text-center px-4" },
        React.createElement('h2', { className: "text-7xl font-bold mb-12" }, "RESUME"),
        
        React.createElement('a', { 
          href: "/assets/resume.pdf",
          download: true,
          className: "inline-block px-12 py-6 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg tracking-widest mb-8"
        },
          "DOWNLOAD PDF"
        ),

        React.createElement('p', { className: "text-sm text-gray-600 max-w-md mx-auto" },
          "Standard format. No animations that crash your PDF reader. No viruses that destroy your device."
        )
      )
    ),

    // Contact
    React.createElement('section', { className: "relative h-screen flex items-center justify-center bg-gradient-to-t from-purple-950 to-black" },
      React.createElement('div', { className: "text-center px-4" },
        React.createElement('h2', { className: "text-6xl font-bold mb-8" }, "CONTACT"),
        React.createElement('p', { className: "text-xl text-gray-400 mb-16 max-w-xl mx-auto" },
          "Open to work and conversation."
        ),

        React.createElement('div', { className: "flex gap-8 justify-center flex-wrap" },
          [
            { label: 'EMAIL', action: 'mailto:pshkai.business@gmail.com', isExternal: false },
            { label: 'LINKEDIN', action: 'https://www.linkedin.com/in/pshkai', isExternal: true },
            { label: 'GITHUB', action: 'https://github.com/pshkai', isExternal: true }
          ].map((contact, i) => {
            const buttonX = window.innerWidth / 2 + (i - 1) * 200;
            const distance = Math.hypot(mousePos.x - buttonX, mousePos.y - window.innerHeight * 0.5);
            const pull = Math.max(0, 1 - distance / 200);

            return React.createElement('a', {
              key: i,
              href: contact.action,
              target: contact.isExternal ? '_blank' : '_self',
              rel: contact.isExternal ? 'noopener noreferrer' : undefined,
              className: "px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest inline-block",
              style: {
                transform: `translateX(${(mousePos.x - buttonX) * pull * 0.3}px) 
                           translateY(${(mousePos.y - window.innerHeight * 0.5) * pull * 0.3}px)
                           scale(${1 + pull * 0.1})`,
                textDecoration: 'none'
              }
            },
              contact.label
            );
          })
        )
      )
    ),

    // Footer
    React.createElement('footer', { className: "relative py-12 text-center text-gray-600 text-sm" },
      React.createElement('p', null, "© 2026 — Built with intention, not templates")
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ThoughtStreamPortfolio));