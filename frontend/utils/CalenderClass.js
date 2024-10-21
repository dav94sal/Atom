class Calendr {
    constructor(date, year, month) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.calendr = this.generateCalender();
        this.months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.week = 0;
        this.weeks = this.weekr();
    }

    stringr() {
        return `${this.months[this.month]} ${this.year}`
    }

    // static today() {
    //     const date = new Date()
    //     const year = date.getFullYear()
    //     const month = date.getFullMonth()
    //     return new Calendr(date, year, month)
    // }

    weekr() {
        const cal = this.calendr
        const weeks = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            wkdays: ['SUN','MON','TUE','WED','THU','FRI','SAT']
        };

        let day = 0
        let week = 1

        let count = 0

        while (day < cal.length) {
            const dayObj = cal[day]
            if (dayObj.class === 'active') {
                this.week = week
            }
            dayObj.week = week
            dayObj.wkday = weeks.wkdays[count]

            weeks[week].push(dayObj)
            if (count === 6) {
                count = 0;
                week++;
            }
            else if (count < 6) count++;

            day++;
        }

        return weeks
    }

    generateCalender() {
        // Get the first day of the month
        let dayone = new Date(this.year, this.month, 1).getDay();

        // Get the last date of the month
        let lastdate = new Date(this.year, this.month + 1, 0).getDate();

        // Get the day of the last date of the month
        let dayend = new Date(this.year, this.month, lastdate).getDay();

        // Get the last date of the previous month
        let monthlastdate = new Date(this.year, this.month, 0).getDate();

        // Variable to store the generated calendar HTML
        let newCal = [];

        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            newCal.push({
                class: "inactive",
                day: monthlastdate - i + 1,
                previous: true
            })
        }

        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {

            // Check if the current date is today
            let isToday = i === this.date.getDate()
                && this.month === new Date().getMonth()
                && this.year === new Date().getFullYear()
                ? "active"
                : "";
            newCal.push({
                // `<li class="${isToday}">${i}</li>`
                class: isToday,
                day: i,
                current: true
            });
        }

        // Loop to add the first dates of the next month
        for (let i = dayend; i < 13; i++) {
            `<li class="inactive">${i - dayend + 1}</li>`
            newCal.push({
                class: "inactive",
                day: i - dayend + 1,
                next: true
            })
        }

        return newCal
    }

    timr() {
        const times = []
        for (let i = 1; i < 24; i++){
            if (i < 12) {
                times.push(`${i} AM`)
            } else if (i === 12) {
                times.push(`${i} PM`)
            } else {
                times.push(`${i - 12} PM`)
            }
        }
        return times
    }

}

export default Calendr;
