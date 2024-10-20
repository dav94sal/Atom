class Calendr {
    constructor(date, year, month) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.calendr = this.generateCalender()
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
    }

    stringr() {
        return `${this.months[this.month]} ${this.year}`
    }

    // weekr() {
    //     return
    // }

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
        let lists = [];

        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            lists.push({
                "class": "inactive",
                "day": monthlastdate - i + 1
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
            lists.push({
                // `<li class="${isToday}">${i}</li>`
                class: isToday,
                day: i
            });
        }

        // Loop to add the first dates of the next month
        for (let i = dayend; i < 13; i++) {
            `<li class="inactive">${i - dayend + 1}</li>`
            lists.push({
                class: "inactive",
                day: i - dayend + 1
            })
        }
        return lists
    }

}

export default Calendr;
