import Image from 'next/image';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

const ConnectWithOurTeamSection = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(4, 'Name must be at least 4 characters')
      .max(50, 'Name cannot exceed 50 characters'),
    email: z.string().email('Invalid email format'),
    message: z
      .string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message cannot exceed 500 characters'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className='flex flex-col space-y-8 md:flex-row md:gap-20 w-full'>
      <div className='flex flex-col space-y-8 w-full'>
        {/* Contact text and image section */}
        <div className='space-y-8'>
          <p className='text-center text-4xl xl:text-5xl  xl:text-start font-bold tracking-[-1px] leading-[41px]'>
            Connect <br className='xl:hidden' /> with{' '}
            <br className='hidden xl:block' /> Our <br className='xl:hidden' />{' '}
            Team.
          </p>{' '}
          <div className='w-full aspect-[272/209] relative rounded-3xl overflow-hidden'>
            <Image
              alt='contact-button'
              src='/images/contact/contact-image.jpeg'
              fill
              className='object-cover border border-border'
            />
          </div>
        </div>
      </div>

      <div className='flex-col flex w-full space-y-4'>
        {/* Contact Form section*/}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 bg-primary  py-[22px] px-4 rounded-3xl w-full'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='rounded-3xl text-sm'
                      placeholder='Name'
                      type='text'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='rounded-3xl text-sm'
                      placeholder='Email'
                      type='email'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className='rounded-2xl bg-primary-foreground h-[193px] text-sm'
                      placeholder='Message'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className='py-3 px-8 bg-primary-foreground text-secondary-foreground'
              type='submit'
            >
              Submit
            </Button>
          </form>
        </Form>

        {/* Hang tight section */}
        <div className='flex flex-row w-full xl: items-center'>
          {' '}
          <div className='flex flex-row items-center w-fit'>
            {/* Stacked images */}
            <div className='relative flex items-center'>
              {/* First Image */}
              <div className='w-11 h-11 md:w-[45px] md:h-[45px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden border-2 border-white relative z-10'>
                <Image
                  src='/images/about/dana-simone-image.png'
                  alt='Person 1'
                  width={64}
                  height={64}
                  className='object-cover'
                />
              </div>

              {/* Second Image - Slightly Overlapping */}
              <div className='w-11 h-11 md:w-[45px] md:h-[45px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden border-2 border-white absolute left-8 xl:left-12 z-20'>
                <Image
                  src='/images/about/ashley-lewis-image.svg'
                  alt='Person 2'
                  width={64}
                  height={64}
                  className='object-cover'
                />
              </div>

              {/* Third Image - Further Overlapping */}
              <div className='w-11 h-11 md:w-[45px] md:h-[45px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden border-2 border-white absolute left-16 xl:left-24 z-30'>
                <Image
                  src='/images/about/casey-bass-image.svg'
                  alt='Person 3'
                  width={64}
                  height={64}
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          {/* Hang Tight text */}
          <div className='w-full text-start ml-18 xl:ml-30'>
            <p className='font-semibold text-[17px] xl:text-[20px]'>
              Hang Tight, We’ll <br className='xl:hidden' /> Reply Shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithOurTeamSection;
