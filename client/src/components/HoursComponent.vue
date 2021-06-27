<template>
    <div class="p-3 rounded-xl text-2xl">
        <div v-for="(hour) in details.hours" :key="hour">
            <div class=" mb-10">
                <span class="text-green-500 font-bold" v-if="hour.is_open_now && hour.open[getDayNow()]">Today :  open at {{formatHour(hour.open[getDayNow()].start)}} to {{formatHour(hour.open[getDayNow()].end)}}</span>
                <span class="text-red-500 font-bold" v-else>Today: Close </span>
            </div>


            <ul>
                <li class="flex justify-between" v-for="(tab,key) in compareHours(hour)">
                    <div class="mr-2">
                        <p class="font-bold">{{key}} : </p>
                    </div>
                    <div>
                        <span>{{formatHour(tab.start)}} - </span><span> {{formatHour(tab.end)}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HoursComponent",
        props: ['details'],
        setup() {
            const getDayNow = () => {
                const timeElasped = Date.now()
                const today = new Date(timeElasped)
                return today.getDay()
            }

            const compareHours = (days) => {
                const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                let tab = []
                let tabIndex = []
                for (let i = 0; i < days.open.length; i++) {
                    tab.push(days.open[i])
                    tabIndex.push(days.open[i].day)
                }
                var result = tab.reduce(function (result, field, index) {
                    result[daysWeek[tabIndex[index]]] = field;
                    return result;
                }, {})
                // console.log(result)
                return result
            }

            const formatHour = (days) => {
                const dayStr = days.toString()
                const part1 = dayStr.slice(0, 2)
                const part2 = dayStr.slice(2)
                return [part1, ':', part2].join('');
            }

            return {getDayNow, compareHours, formatHour}
        }
    }
</script>

<style scoped>

</style>
