interface Alert {
  alert(): string
}
interface Func extends Alert {
  off(): void
  open(): void
}
class Door implements Alert {
  alert () {
    return 'qwe'
  }
}
interface Door {
  a: string
}
interface Door {
  d: string
}
interface demo extends Door {
  demo: string
}
class D implements demo {
  a: string
  d: string
  demo: string
  constructor(demo: string, a: string, d: string) {
    this.demo = demo
    this.a = a
    this.d = d
  }
  alert(): string {
    
    return 'ad'
  }

}
let d = new Door()
d.alert()
let d2: Door = {
  a: 'asd',
  d: 'd',
  alert: () => {
    return 'sad'
  }
}
let d3: Func = {
  alert() {
    return 'ad'
  },
  off() {
    
  },
  open() {

  }
}

export{}