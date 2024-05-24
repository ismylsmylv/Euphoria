import { useTranslation } from 'react-i18next'
import AdHolder from '../../components/adHolder'
import Categories from '../../components/categories'
import Deals from '../../components/deals'
import Feedback from '../../components/feedback'
import Hero from '../../components/hero'
import Limelight from '../../components/limelight'
import NewArrival from '../../components/newArrival'
import Offers from '../../components/offers'
import SavingZone from '../../components/savingZone'


export default function Home() {
    const { t } = useTranslation()
    return (
        <div style={{ width: '100%' }}>
            {/* <Navbar /> */}
            <div id='home'>

                <Hero />
            </div>
            <Offers />
            <NewArrival />
            <SavingZone />


            <div id='ad'>
                <AdHolder />
            </div>
            <div id='men'>
                <Categories type={'men'} count={8} />
            </div>
            <div id='women'>
                <Categories type={'women'} count={4} />
            </div>
            <div id='combos'>
                <Deals />
            </div>
            <div id='joggers'>
                <Limelight count={4} type={t("in_the_limelight")} />
            </div>
            <Feedback />
        </div>
    )
}
