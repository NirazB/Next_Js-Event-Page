'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { type FC, useMemo, useRef } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

type Props = {
  isReversed?: boolean
  className?: string
}

// Testimonial data
const TESTIMONIALS = [
  {
    text: "For me, CS50x has been an enriching experience, providing me with a wealth of knowledge. CS50x is an exceptional course that offers high-quality content for free, providing tremendous value to students worldwide.",
    name: "Manoj Bhattarai",
    position: "Management Student, Mahendra Shanti Secondary School",
  },
  {
    text: "I am delighted to hear on the positive impact of CS50x Nepal on students in Nepal. The curriculum is smooth for beginners; I absolutely loved it.",
    name: "Bivek Bist",
    position: "Computer Engineering, New Summit College",
  },
  {
    text: "The exposure to top-notch lectures from Prof. David Malan is a game-changer for students. I am lucky to find it in my very first year at university.",
    name: "Anupam Kandel",
    position: "BEI Student, IOE Purwanchal Campus",
  },
  {
    text: "The exposure to CS50x has broadened my perspective, and I feel more confident in tackling complex coding challenges. Kudos to the organizers for bringing this incredible opportunity to Nepal!",
    name: "Spandan Guragain",
    position: "BCT Student, IOE Purwanchal Campus",
  },
  {
    text:"Going through the lectures before my project helped me with various other projects as well. I can say that I am confident with my skills, all thanks to CS50x lectures.",
    name:"Gaurav Bohora",
    position:"BCA,NAST"
  }

  // Add more testimonials as needed
]

// Duplicate the testimonials array for seamless infinite scrolling
const ELEMENTS = [...TESTIMONIALS, ...TESTIMONIALS]

const TestimonialsMarquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null)
  const timeline = useRef<GSAPTimeline>()

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        })
        timeline.current = gsap
          .timeline({
            defaults: { ease: 'none', repeat: -1 },
          })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 40, //change this duration for speed of scrolling
          })
          .set(movingContainer.current, { xPercent: 0 })
      }

      setupInfiniteMarqueeTimeline()
    },
    { dependencies: [isReversed] },
  )

  let timelineTimeScaleTween = useRef<GSAPTween>()

  const onPointerEnter = () => {
    if (!timeline.current) return
    timelineTimeScaleTween.current?.kill() //timesScale changes the speed when hovered , make it 0 to stop the card when hovered
    timelineTimeScaleTween.current = gsap.to(timeline.current, { timeScale: 0.25, duration: 0.4 })
  }

  const onPointerLeave = () => {
    if (!timeline.current) return
    timelineTimeScaleTween.current?.kill()
    timelineTimeScaleTween.current = gsap.to(timeline.current, { timeScale: 1, duration: 0.2 })
  }

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-6"> {/* Reduced gap for tighter box */}
        {ELEMENTS.map((testimonial, index) => {
          const isLast = index === ELEMENTS.length - 1
          return (
            <div
              key={index}
              className={twJoin(
                'relative flex shrink-0 flex-col justify-between bg-gray-900 text-white p-6 border border-white rounded-3xl shadow-lg',
                isLast && 'mr-8' // Adjust the margin-right for the last element
              )}
              style={{ width: 400, height: 280 }}> {/* Set fixed width and height for uniform size */}
              <p className="text-sm mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="absolute bottom-4 left-6">
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-gray-400 text-xs">{testimonial.position}</p>
              </div>
            </div>
          )
        })}
      </div>
    ),
    []
  )

  return (
    // changes the entire background
    <div className="w-full h-96 bg-gray-600">
      <div className="py-5">
        <p className="text-2xl font-semibold text-white text-center">TESTIMONAL</p>
      </div>
      <div
        className={twMerge('max-w-full select-none overflow-hidden', className)}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        style={{
          // controls the haze/fog at the corner, make it 'none' for no haze
          maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
        }}>
        <div ref={movingContainer} className="flex w-fit">
          {list}
          {list}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsMarquee
