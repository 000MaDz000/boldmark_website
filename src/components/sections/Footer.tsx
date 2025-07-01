import React from 'react'
import Logo from '../ui/Logo'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6'

function Footer() {
    return (
        <footer className="bg-white border-t text-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                    {/* Logo and Description */}
                    <div className="md:max-w-sm">
                        <Logo />
                        <p className="mt-4 text-gray-500">
                            نبني تجارب رقمية مميزة تساعدك على النمو وتحقيق أهدافك.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold mb-4">الخدمات</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">تصميم المواقع</a></li>
                                <li><a href="#">تطوير التطبيقات</a></li>
                                <li><a href="#">الهوية البصرية</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-4">الشركة</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">من نحن</a></li>
                                <li><a href="#">فريق العمل</a></li>
                                <li><a href="#">الأسئلة الشائعة</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-4">الدعم</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">تواصل معنا</a></li>
                                <li><a href="#">سياسة الخصوصية</a></li>
                                <li><a href="#">الشروط والأحكام</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
                    </p>
                    <div className="flex gap-4 text-gray-500">
                        <a href="#" className="hover:text-gray-800"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-800"><FaXTwitter /></a>
                        <a href="#" className="hover:text-gray-800"><FaInstagram /></a>
                        <a href="#" className="hover:text-gray-800"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
