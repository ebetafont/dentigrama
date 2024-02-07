export class Patient {
    constructor(id, name, username, stage, record) {
      this.id = id
      this.name = name
      this.username = username
      this.stage = stage
      this.record = [] //---------
    }
}

export class Record {
    constructor(id, title, date, patient, superior, inferior) {
      this.id = id
      this.title = title
      this.date = date
      this.patient = patient
      this.superior = superior
      this.inferior = inferior
    }
}

