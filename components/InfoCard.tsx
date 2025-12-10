type Props = {
  title: string;
  description: string;
  icon?: string;
};

export default function InfoCard({ title, description, icon }: Props) {
  return (
    <div className="rounded-lg border p-4 bg-white shadow-sm">
      <div className="flex items-start gap-3">
        {icon && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={icon} alt="" className="h-10 w-10" />
        )}
        <div>
          <h3 className="text-lg font-semibold text-brand-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
