import React, { useEffect, useRef, useState } from 'react';
import {
  Answer,
  FAQGrid,
  FAQItem,
  FAQSection,
  FAQTitle,
  Question,
  Separator,
} from '../../styles/ContactStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faqData from '../../constants/faq';
import {
  faChevronRight,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

const FAQ: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<{
    [key: number]: number | null;
  }>({});

  const faqGridRef = useRef<HTMLDivElement>(null);

  const handleToggle = (
    itemIndex: number,
    questionIndex: number
  ) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [itemIndex]:
        prev[itemIndex] === questionIndex
          ? null
          : questionIndex,
    }));
  };

  useEffect(() => {
    const faqGrid = faqGridRef.current;
    if (!faqGrid) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      faqGrid.classList.add('active');
      startX = e.pageX - faqGrid.offsetLeft;
      scrollLeft = faqGrid.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      faqGrid.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      faqGrid.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - faqGrid.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      faqGrid.scrollLeft = scrollLeft - walk;
    };

    faqGrid.addEventListener('mousedown', handleMouseDown);
    faqGrid.addEventListener(
      'mouseleave',
      handleMouseLeave
    );
    faqGrid.addEventListener('mouseup', handleMouseUp);
    faqGrid.addEventListener('mousemove', handleMouseMove);

    return () => {
      faqGrid.removeEventListener(
        'mousedown',
        handleMouseDown
      );
      faqGrid.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
      faqGrid.removeEventListener('mouseup', handleMouseUp);
      faqGrid.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <FAQSection>
      <FAQTitle>FAQ</FAQTitle>
      <FAQGrid ref={faqGridRef}>
        {faqData.map((item, itemIndex) => (
          <FAQItem key={itemIndex}>
            {item.questions.map(
              (question, questionIndex) => (
                <div key={questionIndex}>
                  <Question
                    className={
                      activeIndexes[itemIndex] ===
                      questionIndex
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      handleToggle(itemIndex, questionIndex)
                    }
                  >
                    {question}{' '}
                    <FontAwesomeIcon
                      icon={
                        activeIndexes[itemIndex] ===
                        questionIndex
                          ? faChevronUp
                          : faChevronRight
                      }
                    />
                  </Question>
                  <Answer
                    className={
                      activeIndexes[itemIndex] ===
                      questionIndex
                        ? 'active'
                        : ''
                    }
                  >
                    {item.answers[questionIndex]}
                  </Answer>
                  {activeIndexes[itemIndex] !==
                    questionIndex && <Separator />}
                </div>
              )
            )}
          </FAQItem>
        ))}
      </FAQGrid>
    </FAQSection>
  );
};

export default FAQ;
