import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "1M+",
    icon: <BsBarChartFill size={34} className="textblack" />,
    description:
      "Her gün yüzbinlerce öğrenci ve öğretmenin faydalanabileceği eğitim içeriği.",
  },
  {
    title: "4.8",
    icon: <BsFillStarFill size={34} className="text-black" />,
    description:
      "Uygulama içi değerlendirmelerdeki yıldız puanı, sürekli olarak yüksek.",
  },
  {
    title: "50+ ",
    icon: <PiGlobeFill size={34} className="text-black" />,
    description:
      "Farklı eğitim kurumlarıyla entegre, tüm öğrencilerin verileri tek bir platformda.",
  },
];
