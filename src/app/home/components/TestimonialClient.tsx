import Testimonials from "./Testimonials";
import type { FC } from "react";

interface TestimonialClientProps {
    testimonials: any[];
}

const TestimonialClient: FC<TestimonialClientProps> = ({ testimonials }) => {
    return <Testimonials testimonials={testimonials} />;
};

export default TestimonialClient;
