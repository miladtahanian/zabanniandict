import Head from "next/head";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import ColorSwatch from "../components/ColorSwatch";
import SwitchToggle from "../components/SwitchToggle";
import { useThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const onSwitchClick = () => {
    setTheme({
      type: "TOGGLE_MODE",
    });
  };

  useEffect(() => {
    setChecked(theme.darkMode);
  }, [theme]);

  return (
    <>
      <Head>
        <title>تنظیمات</title>
        <meta
          name="description"
          content="صفحه تنظیمات دیکشنری زبانیان"
        />
      </Head>
      <main>
        <Heading type="h1">تنظیمات</Heading>
        <section>
          <Heading type="h2">رنگ آمیزی</Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="switch_dark_mode">حالت تاریک</label>
              <SwitchToggle
                id="switch_dark_mode"
                checked={checked}
                onCheckedChange={onSwitchClick}
              />
            </div>
            <ColorSwatch />
          </form>
        </section>
        <section>
          <Heading type="h2">درباره زبانیان</Heading>
          <Heading type='h2'>
          به زبانیان خوش آمدید! این اپلیکیشن دیکشنری نوآورانه به‌طور خاص برای یادگیرندگان زبان انگلیسی در تمام سطوح طراحی شده است. چه شما یک مبتدی باشید که تازه سفر یادگیری زبان خود را شروع کرده‌اید و چه یک دانشجوی پیشرفته که به دنبال تقویت مهارت‌های خود هستید، زبانیان در هر مرحله از راه همراه شماست.
          </Heading>
          <p>ویژگی‌ها:</p>
          <p>
          - پایگاه داده جامع کلمات: هزاران کلمه و عبارت را با تعاریف دقیق، جملات نمونه و تلفظ‌های صوتی کشف کنید تا به تسلط بر جزئیات زبان انگلیسی برسید.
          </p>
          <p>
          - رابط کاربری آسان: طراحی کاربرپسند ما جستجوی کلمات، ذخیره کردن موارد دلخواه و پیمایش در اپلیکیشن را برای شما آسان کرده است.
          </p>
          <p>
          - ابزارهای یادگیری تعاملی: با آزمون‌های تعاملی و فلش‌کارت‌ها درگیر شوید که واژگان و مهارت‌های درک شما را تقویت می‌کند و یادگیری را سرگرم‌کننده و مؤثر می‌سازد.
          </p>
          <p>
          - استفاده متنی: یاد بگیرید که چگونه کلمات در زمینه‌های مختلف با مثال‌های واقعی استفاده می‌شوند تا بتوانید به طور طبیعی و با اعتماد به نفس بیشتر ارتباط برقرار کنید.
          </p>

          <p>
          - تجربه شخصی‌سازی‌شده: سفر یادگیری خود را با پیگیری پیشرفت، تعیین اهداف و دریافت توصیه‌های متناسب با علایق و سطح تسلط خود سفارشی کنید.
          </p>

          <p>در زبانیان، ما معتقدیم که یادگیری زبان انگلیسی باید تجربه‌ای لذت‌بخش و غنی باشد. مأموریت ما توانمندسازی یادگیرندگان با ارائه ابزارهایی است که برای موفقیت در سفر زبان‌آموزی خود نیاز دارند. امروز به جمع علاقه‌مندان زبان بپیوندید و دنیای زبان انگلیسی را با زبانیان کشف کنید!</p>
        </section>
        <section>
          <Heading type="h2">طراحی و توسعه</Heading>
          <p>
            میلاد طحانیان
          </p>
        </section>
        <style jsx>{`
          main {
            display: grid;
            row-gap: 2.2rem;
            font-family: "Inter", sans-serif;
          }

          label {
            font-size: 1.2rem;
            font-weight: 600;
          }

          section {
            display: grid;
            row-gap: 1.56rem;
          }

          form {
            display: grid;
            row-gap: 1.25rem;
          }

          form > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          /*
            on bigger screens center content
          */
          @media (min-width: 640px) {
            main {
              margin: 4rem auto 2rem;
              width: 70%;
            }
          }
          @media (min-width: 100px) {
            main {
              margin: 4rem auto 2rem;
              width: 60%;
            }
          }
        `}</style>
        <style jsx>{`
          label {
            color: ${theme.color[10]};
          }
          p {
            color: ${theme.gray[11]};
          }
          a {
            color: ${theme.color[10]};
          }
        `}</style>
      </main>
    </>
  );
}
