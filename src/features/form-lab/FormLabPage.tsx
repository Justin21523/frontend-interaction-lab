import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SlideUp from '@/components/motion/SlideUp';

// Define strict validation schema with Zod
const formSchema = z.object({
  topic: z.string().min(2, { message: 'Topic must be at least 2 characters.' }),
  hours: z.coerce.number().min(1, { message: 'Must be at least 1 hour.' }).max(12, { message: 'Cannot exceed 12 hours.' }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormLabPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      hours: 1,
      notes: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log('Validated Form Data:', values);
    toast.success('Learning record saved!', {
      description: `You studied ${values.topic} for ${values.hours} hours.`,
    });
    form.reset();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-bold text-slate-800 border-b pb-4">Form & Validation Lab</h1>
        <p className="text-slate-600 mt-2">Powered by React Hook Form, Zod, and shadcn/ui.</p>
      </SlideUp>

      <SlideUp delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Log Learning Session</CardTitle>
            <CardDescription>Record your daily frontend study progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topic</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. React Server Components" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hours Studied</FormLabel>
                      <FormControl>
                        <Input type="number" min={1} max={12} {...field} />
                      </FormControl>
                      <FormDescription>Between 1 and 12 hours.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="What did you learn today?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Saving...' : 'Save Record'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </SlideUp>
    </div>
  );
}