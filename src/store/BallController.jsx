import { atom, selector } from "recoil"

let Balllocation = atom({
  key: "clicked",
  default: { x: 0, y: 0 }   // settind default value
})

let Ballspeed = atom({
  key: "drag",
  default: [-3.5, -1, -2]   // settind default value
})

let Ballrigid = atom(
  {
    key: "rigid",
    default: false
  }
)


let Ballfollowing = atom(
  {
    key: "follow",
    default: false
  }
)


const evenselector = selector({
  key: "evenselector",
  get: ({ get }) => {
    const count = get(countatom) // you will get access to count variable 
    return count % 2;
  }
})

const Bowling = selector(
  {
    key: "bowlingspeedandqeta",
    get: ({ get }) => {
      const speed = get(Ballspeed)
      return {
        x: speed[1],
        y: speed[1] / speed[0]
      };
    }
  }
)
export { Balllocation, Ballspeed, Ballrigid, Bowling, Ballfollowing }  
