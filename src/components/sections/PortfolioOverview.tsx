import React from 'react'
// import WorkCard from '../ui/WorkCard';

function PortfolioOverview() {
    // const projects = [
    //     {
    //         image: '/circles_wave2.jpg',
    //         title: 'إعادة تصميم هوية بصرية',
    //         description: 'تصميم شامل لعلامة تجارية معاصرة يشمل الشعار والألوان والخطوط.',
    //     },
    //     {
    //         image: '/circles_wave.jpg',
    //         title: 'موقع لمعرض فني تفاعلي',
    //         description: 'تصميم واجهة مستخدم لمعرض رقمي يعرض أعمال فنية بطريقة إبداعية.',
    //     },
    //     {
    //         image: '/circles_wave.jpg',
    //         title: 'دليل تعريفي لشركة تقنية ناشئة',
    //         description: 'تصميم ملف تعريفي بتصميم بسيط وجريء لشركة تقنية في مجال SaaS.',
    //     },
    // ];

    return (
        <section className='space-y-7 text-center'>
            <h3 className='text-4xl font-semibold'>اعمالنا</h3>
            <div className='grid grid-cols-3 gap-7 container mx-auto' >
                {/* {projects.map((project, i) => (
                    <WorkCard title={project.title} image={project.image} description={project.description} key={i} />
                ))} */}
            </div>
        </section>
    )
}

export default PortfolioOverview