import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CompanyBarChart = ({ data }) => {
  return (
    <div className='w-full h-[400px]'>
      <h2 className='text-xl font-semibold mb-4'>Applications by Company</h2>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          layout='vertical'
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
          <CartesianGrid strokeDasharray='33'></CartesianGrid>
          <XAxis type='number' allowDecimals={false}></XAxis>
          <YAxis type='category' dataKey='company' width={120}></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey='applications' radius={[0, 8, 8, 0]}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CompanyBarChart;
