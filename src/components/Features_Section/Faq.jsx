import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
    const faqData = [
        { id: 1, question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { id: 2, question: "Why do we use Lorem Ipsum?", answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
        { id: 3, question: "Where can I get Lorem Ipsum?", answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
        { id: 4, question: "What is the history of Lorem Ipsum?", answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC." },
        { id: 5, question: "Is Lorem Ipsum legal?", answer: "Yes, using Lorem Ipsum text for design mockups or as placeholder content is completely legal." },
        { id: 6, question: "Can Lorem Ipsum be customized?", answer: "Yes, there are many tools available online that allow you to generate customized Lorem Ipsum text." },
        { id: 7, question: "Is Lorem Ipsum still relevant?", answer: "Lorem Ipsum remains widely used in the design and typesetting industry as a placeholder text." },
        { id: 8, question: "How do I use Lorem Ipsum?", answer: "You can simply copy and paste Lorem Ipsum text from any generator or source and place it in your document as a placeholder." },
        { id: 9, question: "What is the purpose of Lorem Ipsum?", answer: "Lorem Ipsum is used to provide a distraction-free layout by replacing actual text with filler content during the design process." },
        { id: 10, question: "How do I generate Lorem Ipsum text?", answer: "You can use various online generators to create Lorem Ipsum text of any length, for both paragraphs and sentences." },
        { id: 11, question: "Is there a difference between fake and real Lorem Ipsum?", answer: "Most Lorem Ipsum generators produce fake text, but some generate passages from the original classical Latin text." },
        { id: 12, question: "Does Lorem Ipsum have a meaning?", answer: "The classical Latin text of Lorem Ipsum comes from 'De Finibus Bonorum et Malorum', a work by Cicero written in 45 BC." }
    ];

    const [openFaq, setOpenFaq] = useState(null);
    const handleToggle = (id) => setOpenFaq(openFaq === id ? null : id);

    const renderFaqs = (faqs) => (
        faqs.map(({ id, question, answer }) => (
            <div key={id} className="mb-4 w-full">
                <button className="bg-light-white flex items-center justify-between cursor-pointer p-4 rounded-xl w-full" onClick={() => handleToggle(id)}>
                    <h1 className="text-xs lg:text-lg font-medium">{question}</h1>
                    <FaAngleDown className={`transform transition-transform duration-300 ${openFaq === id ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openFaq === id ? "max-h-screen px-3" : "max-h-0"}`}>
                    <div className="bg-light-mercury p-5 rounded-b-xl">
                        <p className="text-gray-700 text-center text-xs lg:text-base">{answer}</p>
                    </div>
                </div>
            </div>
        ))
    );

    return (
        <div data-aos="fade-up">
            <h1 className="text-4xl font-bold text-center">FAQ</h1>
            <p className="text-base text-gray-700 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 my-10">
                <div>{renderFaqs(faqData.slice(0, 7))}</div>
                <div>{renderFaqs(faqData.slice(7, 20))}</div>
            </div>
        </div>
    );
};

export default Faq;
