import './styles/styles.scss';
import { fetchCoordinates, fetchWeather, fetchImage, displayTripInfo, calculateTripDuration } from './js/app';

// إضافة مستمع لإرسال النموذج
document.getElementById('travel-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على القيم المدخلة
    const location = document.getElementById('location').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    try {
        //جلب البيانات من الفرونت
        const coordinates = await fetchCoordinates(location);
        const weather = await fetchWeather(coordinates.lat, coordinates.lng);
        const image = await fetchImage(location);

        // حساب مدة الرحلة وعرض المعلومات
        const tripDuration = calculateTripDuration(startDate, endDate);
        displayTripInfo(coordinates, weather, image, startDate, endDate, tripDuration);
    } catch (error) {
        // التعامل مع الأخطاء
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again later.');
    }
});
